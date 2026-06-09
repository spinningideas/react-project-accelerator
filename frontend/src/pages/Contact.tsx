import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
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

  const onSubmit = (data: ContactSubmission) => {
    notificationsService.show("Success", "success");
    console.log("Form submitted:", data);
  };

  return (
    <>
      <NavigationPublic />
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-3xl font-bold mb-4">Contact</h3>
      <p className="mb-6">Fill out the form to submit contact info - this is example use of form and styling it</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="max-w-2xl">
          <CardContent className="space-y-4 pt-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                type="text"
                {...register("name", {
                  required: "Required",
                })}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "Required",
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
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                {...register("message", {
                  required: "Required",
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
              Save
            </Button>
          </CardFooter>
        </Card>
      </form>
      </div>
    </>
  );
};

export default Contact;
