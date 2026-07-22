import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// contexts
import { useAuth } from "@/contexts/AuthContext";
// services
import GeoService from "@/services/GeoService";
import { useToast } from "@/components/shared/Toast";
// components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LoadingIndicator from "@/components/shared/LoadingIndicator";
import GetStartedMessage from "@/components/home/GetStartedMessage";

const Home = () => {
  const { user } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [userIpAddress, setUserIpAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const geoService = GeoService();
  const { toastSuccess, toastError, toastInfo, showToast } = useToast();

  const showNotification = (
    message: string,
    type: "success" | "error" | "info" | "default",
  ) => {
    switch (type) {
      case "success":
        toastSuccess(message);
        break;
      case "error":
        toastError(message);
        break;
      case "info":
        toastInfo(message);
        break;
      default:
        showToast(message, "default");
    }
  };

  const showIpAddress = async () => {
    setUserIpAddress("");
    setIsLoading(true);
    try {
      const response = await geoService.getCurrentIPAddress();
      if (response.success && response.data) {
        setUserIpAddress(response.data.message);
      } else {
        setUserIpAddress("Error occurred");
      }
    } catch (error) {
      setUserIpAddress("Error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-6"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6">Welcome to React Project Accelerator</h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GetStartedMessage
            displayGetStarted={true}
            message="To get started use the menu to navigate and change languages"
          />
        </motion.div>

        {user && (
          <motion.div variants={itemVariants}>
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle>Authenticated Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Here is content displayed only if user is signed in</p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Below are examples of 'toast' style notifications</p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button
                variant="secondary"
                onClick={() => showNotification("Success", "success")}
              >
                Success
              </Button>
              <Button
                variant="secondary"
                onClick={() => showNotification("Info", "info")}
              >
                Info
              </Button>
              <Button
                variant="secondary"
                onClick={() => showNotification("Error", "error")}
              >
                Error
              </Button>
              <Button
                variant="secondary"
                onClick={() => showNotification("Message", "default")}
              >
                Message
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Modal Dialogs</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Below are examples of modal dialogs
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" onClick={() => setModalOpen(true)}>
                View
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Welcome!</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p>Welcome to React Project Accelerator</p>
              <p>This app was created to provide an example reference implementation to bootstrap and accelerate react project and to explore using various client side libraries to compose a rich user experience.</p>
              <Button variant="secondary" onClick={() => setModalOpen(false)}>
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Example of use of services and HttpClient</p>
              <Button
                variant="secondary"
                onClick={showIpAddress}
                className="mt-4"
              >
                View Ip Address
              </Button>
              {isLoading ? (
                <LoadingIndicator
                  loading={isLoading}
                  size={5}
                  className="mt-2"
                />
              ) : (
                userIpAddress && <p className="mt-2">{userIpAddress}</p>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Forms</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Example of use of forms and validation via react-hook-form</p>
              <Button variant="secondary" asChild className="mt-4">
                <Link to="/contact/testnameparam">Forms Example</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
