import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { useLocalization } from "@/contexts/LocalizationContext";
import GeoService from "@/services/GeoService";
import NotificationsService from "@/services/NotificationsService";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import LoadingIndicator from "@/components/shared/LoadingIndicator";
import GetStartedMessage from "@/components/home/GetStartedMessage";

const Home = () => {
  const { user } = useAuth();
  const { locData, loadLocalizedText } = useLocalization();
  const [modalOpen, setModalOpen] = useState(false);
  const [userIpAddress, setUserIpAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const geoService = GeoService();
  const notificationsService = NotificationsService();

  useEffect(() => {
    loadLocalizedText([
      "welcome",
      "homepagewelcome",
      "aboutdescription",
      "getstartedmessage",
      "notifications",
      "notificationsdescription",
      "modals",
      "modalsdescription",
      "error",
      "success",
      "view",
      "close",
      "authenticatedcontent",
      "authenticatedcontentdescription",
      "services",
      "serviceexampletitle",
      "serviceexampledescription",
      "forms",
      "formsexample",
      "formsexampledescription",
    ]);
  }, []);

  const showNotification = (message: string, type: "success" | "error") => {
    notificationsService.show(message, type);
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
          <h2 className="text-3xl font-bold mb-6">{locData.homepagewelcome}</h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GetStartedMessage
            displayGetStarted={true}
            message={locData.getstartedmessage}
          />
        </motion.div>

        {user && (
          <motion.div variants={itemVariants}>
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle>{locData.authenticatedcontent}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{locData.authenticatedcontentdescription}</p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>{locData.notifications}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{locData.notificationsdescription}</p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button
                variant="secondary"
                onClick={() => showNotification(locData.success, "success")}
              >
                {locData.success}
              </Button>
              <Button
                variant="secondary"
                onClick={() => showNotification(locData.error, "error")}
              >
                {locData.error}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>{locData.modals || "Modal Dialogs"}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{locData.modalsdescription || "Below are examples of modal dialogs"}</p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" onClick={() => setModalOpen(true)}>
                {locData.view || "View"}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{locData.welcome}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p>{locData.homepagewelcome}</p>
              <p>{locData.aboutdescription}</p>
              <Button variant="secondary" onClick={() => setModalOpen(false)}>
                {locData.close}
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>{locData.services}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{locData.serviceexampledescription}</p>
              <Button
                variant="secondary"
                onClick={showIpAddress}
                className="mt-4"
              >
                {locData.serviceexampletitle}
              </Button>
              {isLoading ? (
                <LoadingIndicator loading={isLoading} size={5} className="mt-2" />
              ) : (
                userIpAddress && <p className="mt-2">{userIpAddress}</p>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>{locData.forms}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{locData.formsexampledescription}</p>
              <Button variant="secondary" asChild className="mt-4">
                <Link to="/contact/testnameparam">{locData.formsexample}</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
