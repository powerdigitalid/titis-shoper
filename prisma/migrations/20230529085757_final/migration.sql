/*
  Warnings:

  - You are about to drop the column `order` on the `order` table. All the data in the column will be lost.
  - You are about to alter the column `state` on the `order` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.
  - Added the required column `productId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `order`,
    ADD COLUMN `addres` VARCHAR(191) NULL,
    ADD COLUMN `phone` VARCHAR(191) NULL,
    ADD COLUMN `productId` INTEGER NOT NULL,
    MODIFY `name` VARCHAR(191) NULL,
    MODIFY `total` DOUBLE NULL,
    MODIFY `state` VARCHAR(191) NULL DEFAULT 'unconfirmed';

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
