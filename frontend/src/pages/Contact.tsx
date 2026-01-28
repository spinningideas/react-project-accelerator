import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLocalization } from "@/contexts/LocalizationContext";
import NotificationsService from "@/services/NotificationsService";
import ContactSubmission from "@/models/ContactSubmission";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import NavigationPublic from "@/components/app/NavigationPublic";

const Contact = () => {
  const { name } = useParams<{ name?: string }>();
  const { locData, loadLocalizedText } = useLocalization();
  const notificationsService = NotificationsService();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactSubmission>({
    defaultValues: {
      name: name || "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    loadLocalizedText([
      "contact",
      "contactdescription",
      "save",
      "name",
      "email",
      "message",
      "required",
      "success",
    ]);
  }, []);

  const onSubmit = (data: ContactSubmission) => {
    notificationsService.show(locData.success, "success");
    console.log("Form submitted:", data);
  };

  return (
    <>
      <NavigationPublic />
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-3xl font-bold mb-4">{locData.contact}</h3>
      <p className="mb-6">{locData.contactdescription}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="max-w-2xl">
          <CardContent className="space-y-4 pt-6">
            <div className="space-y-2">
              <Label htmlFor="name">{locData.name} *</Label>
              <Input
                id="name"
                type="text"
                {...register("name", {
                  required: locData.required || "This field is required",
                })}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{locData.email} *</Label>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: locData.required || "This field is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{locData.message} *</Label>
              <Textarea
                id="message"
                {...register("message", {
                  required: locData.required || "This field is required",
                })}
                rows={4}
              />
              {errors.message && (
                <p className="text-sm text-destructive">{errors.message.message}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isSubmitting}>
              {locData.save}
            </Button>
          </CardFooter>
        </Card>
      </form>
      </div>
    </>
  );
};

export default Contact;
