import { useState, useEffect } from "react";
// components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/shared/Toast";
import { useAuth } from "@/contexts/AuthContext";
// services
import { updateUser } from "@/services/users/usersService";
// models
import User from "@/models/user/User";

/*
 * @returns UserProfile component that allows user to set name and email
 */
const UserProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const { toastSuccess, toastError } = useToast();

  useEffect(() => {
    if (user) {
      setEmail(user.email || "");
      setName(user.name || "");
    }
  }, [user]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const updatedUser: User = {
        userId: user?.userId || "",
        name,
        email,
        active: true,
      };

      // Update user metadata
      const response = await updateUser(
        updatedUser.userId,
        updatedUser.name,
        updatedUser.email,
      );

      if (response.success) {
        toastSuccess({
          title: "Profile updated",
          description:
            "Your profile information has been updated successfully.",
        });
      } else {
        toastError({
          title: "Update failed",
          description:
            response.message || "Failed to update profile. Please try again.",
        });
      }

      // TODO: implement password update
      // // Update password if provided
      // if (newPassword) {
      //   const { error: passwordError } = await updateUser({
      //     password: newPassword,
      //   });

      //   if (passwordError) {
      //     throw passwordError;
      //   }
      // }
    } catch (err: any) {
      toastError({
        title: "Update failed",
        description:
          err.message || "Failed to update profile. Please try again.",
      });
    } finally {
      setIsLoading(false);
      setNewPassword(""); // Clear password field after update attempt
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Your Profile</CardTitle>
        <CardDescription>Update your personal information</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 placeholder-gray-700 dark:placeholder-gray-400"
            />
            <p className="text-xs text-muted-foreground">
              Email cannot be changed
            </p>
          </div>
          <div className="space-y-2">
            <label htmlFor="new-password" className="text-sm font-medium">
              New Password (leave blank to keep current)
            </label>
            <Input
              id="new-password"
              type="password"
              placeholder="••••••••"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              minLength={6}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Updating..." : "Update Profile"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <div className="text-sm text-muted-foreground">
          Connected as {user?.email}
        </div>
      </CardFooter>
    </Card>
  );
};

export default UserProfile;
