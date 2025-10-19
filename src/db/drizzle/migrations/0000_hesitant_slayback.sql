CREATE TABLE "form_field" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"type" "form_field_type_enum" NOT NULL,
	"label" varchar(255),
	"placeholder" varchar(1000)
);
