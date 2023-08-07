-- CreateTable
CREATE TABLE "identities" (
    "id" UUID NOT NULL,
    "passwordHash" VARCHAR,

    CONSTRAINT "identities_pkey" PRIMARY KEY ("id")
);
