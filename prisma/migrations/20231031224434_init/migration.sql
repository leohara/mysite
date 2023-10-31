-- CreateTable
CREATE TABLE "metadata" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "writings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "bookmarks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT,
    "url" TEXT NOT NULL,
    "bookmarkId" TEXT NOT NULL,
    "content" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "metadata_key_key" ON "metadata"("key");

-- CreateIndex
CREATE UNIQUE INDEX "writings_postId_key" ON "writings"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "bookmarks_url_key" ON "bookmarks"("url");

-- CreateIndex
CREATE UNIQUE INDEX "bookmarks_bookmarkId_key" ON "bookmarks"("bookmarkId");
