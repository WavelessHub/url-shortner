/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `URL` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `URL_id_key` ON `URL`(`id`);
