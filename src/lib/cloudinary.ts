import { v2 as cloudinary } from 'cloudinary';

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dmko2zav7',
    api_key: process.env.CLOUDINARY_API_KEY || '195252934725612',
    api_secret: process.env.CLOUDINARY_API_SECRET || '2k2jRQyebgpcKsClcImkS8F9K0Y',
    secure: true,
});

export { cloudinary };

export const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME || 'dmko2zav7'}/image/upload`;

// Gallery folder categories (sorted alphabetically for consistent order)
export const GALLERY_FOLDERS = ['Astro', 'Bikes', 'Cars', 'Drones', 'Lambo', 'moon', 'Mountains', 'Nature', 'skies', 'Sunsets'];

// Image URL builders
const buildImageUrl = (publicId: string, transforms: string) => 
    `${CLOUDINARY_BASE_URL}/${transforms}/${publicId}`;

// Get folder contents
export async function getFolderImages(folderName: string) {
    try {
        const searchPatterns = [
            `folder:portfolio_uploads/${folderName}`,
            `folder:portfolio_uploads/${folderName.toLowerCase()}`,
            `folder:portfolio_uploads/${folderName.charAt(0).toUpperCase() + folderName.slice(1).toLowerCase()}`,
            `folder:portfolio/${folderName}`,
            `folder:${folderName}`,
        ];

        let result = null;

        for (const pattern of searchPatterns) {
            try {
                result = await cloudinary.search
                    .expression(pattern)
                    .max_results(500)
                    .execute();

                if (result.resources.length > 0) break;
            } catch {
                continue;
            }
        }

        if (!result || result.resources.length === 0) return [];

        // Sort by public_id to maintain consistent order
        const sortedResources = result.resources.sort((a: any, b: any) => 
            a.public_id.localeCompare(b.public_id)
        );

        return sortedResources.map((resource: any, index: number) => {
            const aspectRatio = resource.width / resource.height;
            const publicId = resource.public_id;

            return {
                id: index + 1,
                title: `${folderName.charAt(0).toUpperCase() + folderName.slice(1)} Photo ${index + 1}`,
                description: `A photograph from the ${folderName} collection`,
                imageUrl: buildImageUrl(publicId, 'w_800,c_fill,g_auto,q_100,f_auto'),
                thumbnailUrl: buildImageUrl(publicId, 'w_100,c_fill,g_auto,q_50,f_auto'),
                previewUrl: buildImageUrl(publicId, 'w_2000,c_fill,g_auto,q_100,f_auto'),
                coverUrl: buildImageUrl(publicId, 'w_600,h_750,c_fill,g_auto,q_100,f_auto'),
                originalUrl: resource.secure_url,
                downloadUrl: buildImageUrl(publicId, 'fl_attachment,q_100'),
                publicId,
                width: resource.width,
                height: resource.height,
                aspectRatio,
                isLandscape: aspectRatio >= 1,
            };
        });
    } catch (error: any) {
        console.error(`Error fetching images from ${folderName}:`, error);
        return [];
    }
}

// Get gallery sections (images grouped by folder)
export async function getGallerySections() {
    try {
        const sections = [];

        for (const folder of GALLERY_FOLDERS) {
            const images = await getFolderImages(folder);
            if (images.length > 0) {
                sections.push({ title: folder, images });
            }
        }

        return sections;
    } catch (error) {
        console.error('Error fetching gallery sections:', error);
        return [];
    }
}
