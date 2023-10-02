-- CreateTable
CREATE TABLE `URL` (
    `id` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `shortenedUrl` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `URL_shortenedUrl_key`(`shortenedUrl`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
