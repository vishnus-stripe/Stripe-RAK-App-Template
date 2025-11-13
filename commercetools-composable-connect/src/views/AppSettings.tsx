import {
    Box,
    Inline,
    Icon,
    SettingsView,
    Button,
    Divider,
  } from "@stripe/ui-extension-sdk/ui";
  
  const AppSettings = () => {
    return (
      <SettingsView>
        {/* Header Section */}
        <Box css={{ marginTop: "large", marginBottom: "medium", stack: "x", gap: "small", alignY: "center" }}>
          <Icon name="guide" size="small" />
          <Inline css={{ font: "heading" }}>Get Started</Inline>
        </Box>
        
        <Box css={{ marginBottom: "xlarge" }}>
          <Inline css={{ font: 'body', color: 'primary' }}>
            Thank you for installing the Stripe App for Commercetools Composable Commerce. Follow these steps to complete your setup:
          </Inline>
        </Box>
  
        {/* Step-by-step guide */}
        <Box css={{ gap: "large", stack: "y" }}>
          
          {/* Step 1 */}
          <Box css={{ gap: "small", stack: "y", padding: "medium", borderRadius: "medium" }}>
            <Box css={{ stack: "x", gap: "small", alignY: "center" }}>
              <Inline css={{ font: 'heading', fontWeight: "semibold", color: "primary" }}>
                Step 1.
              </Inline>
              <Inline css={{ font: 'subheading', fontWeight: "semibold" }}>
                Install from Marketplace
              </Inline>
            </Box>
            <Box css={{ font: 'body', color: 'secondary' }}>
              Navigate to the Commercetools Connect Marketplace in your Commercetools instance and select <Inline css={{ fontWeight: "semibold" }}>Stripe Payment for Composable Commerce</Inline>.
            </Box>
            <Box css={{ marginTop: "small" }}>
              <Button 
                type="secondary" 
                href="https://marketplace.commercetools.com/" 
                target="_blank"
              >
                <Box css={{ stack: "x", gap: "small", alignY: "center" }}>
                  <Icon name="platform" size="small" />
                  Go to Marketplace
                </Box>
              </Button>
            </Box>
          </Box>
  
          {/* Step 2 */}
          <Box css={{ gap: "small", stack: "y", padding: "medium", borderRadius: "medium" }}>
            <Box css={{ stack: "x", gap: "small", alignY: "center" }}>
              <Inline css={{ font: 'heading', fontWeight: "semibold", color: "primary" }}>
                Step 2.
              </Inline>
              <Inline css={{ font: 'subheading', fontWeight: "semibold" }}>
                Complete Installation
              </Inline>
            </Box>
            <Box css={{ font: 'body', color: 'secondary' }}>
              Follow our step-by-step installation guide to set up the connector in your environment.
            </Box>
            <Box css={{ marginTop: "small" }}>
              <Button 
                type="primary" 
                href="https://docs.stripe.com/use-stripe-apps/commercetools-connect/install-and-configure" 
                target="_blank"
              >
                <Box css={{ stack: "x", gap: "small", alignY: "center" }}>
                  <Icon name="guide" size="small" />
                  View Installation Guide
                </Box>
              </Button>
            </Box>
          </Box>
  
          {/* Step 3 */}
          <Box css={{ gap: "small", stack: "y", padding: "medium", borderRadius: "medium" }}>
            <Box css={{ stack: "x", gap: "small", alignY: "center" }}>
              <Inline css={{ font: 'heading', fontWeight: "semibold", color: "primary" }}>
                Step 3.
              </Inline>
              <Inline css={{ font: 'subheading', fontWeight: "semibold" }}>
                Choose Your Configuration
              </Inline>
            </Box>
            <Box css={{ font: 'body', color: 'secondary', marginBottom: "medium" }}>
              Configure the connector in either <Inline css={{ fontWeight: "semibold" }}>Payments only</Inline> mode or <Inline css={{ fontWeight: "semibold" }}>Payments + Subscriptions</Inline> mode.
            </Box>
            
            {/* Configuration Options */}
            <Box css={{ stack: "y", gap: "medium" }}>
              <Box css={{ padding: "medium", borderRadius: "small" }}>
                <Box css={{ stack: "x", gap: "xsmall", alignY: "center", marginBottom: "xsmall" }}>
                  <Inline css={{ font: 'body' }}>💳</Inline>
                  <Inline css={{ font: 'body', fontWeight: "semibold" }}>
                    Payments Only
                  </Inline>
                </Box>
                <Box css={{ font: 'caption', color: 'secondary' }}>
                  Accept one-time payments from your customers
                </Box>
              </Box>
              
              <Box css={{ padding: "medium", borderRadius: "small" }}>
                <Box css={{ stack: "x", gap: "xsmall", alignY: "center", marginBottom: "xsmall" }}>
                  <Inline css={{ font: 'body' }}>🔄</Inline>
                  <Inline css={{ font: 'body', fontWeight: "semibold" }}>
                    Payments + Subscriptions
                  </Inline>
                </Box>
                <Box css={{ font: 'caption', color: 'secondary', marginBottom: "small" }}>
                  Enable recurring billing for subscription products
                </Box>
                <Button 
                  type="primary" 
                  size="small" 
                  href="https://docs.stripe.com/use-stripe-apps/commercetools-connect/use-subscriptions" 
                  target="_blank"
                >
                  Configure Subscriptions →
                </Button>
              </Box>
            </Box>
          </Box>
  
          {/* Step 4 */}
          <Box css={{ gap: "small", stack: "y", padding: "medium", borderRadius: "medium" }}>
            <Box css={{ stack: "x", gap: "small", alignY: "center" }}>
              <Inline css={{ font: 'heading', fontWeight: "semibold", color: "primary" }}>
                Step 4.
              </Inline>
              <Inline css={{ font: 'subheading', fontWeight: "semibold" }}>
                Get Your API Keys
              </Inline>
            </Box>
            <Box css={{ font: 'body', color: 'secondary' }}>
              Your API keys authenticate requests between Commercetools and Stripe. Click <Inline css={{ fontWeight: "semibold" }}>View API Keys</Inline> at the top right of this page to access them.
            </Box>
            <Box css={{ marginTop: "medium", padding: "medium", borderRadius: "small" }}>
              <Box css={{ stack: "x", gap: "small", alignY: "center" }}>
                <Icon name="lock" size="small" />
                <Inline css={{ font: 'body', color: 'primary' }}>
                  Look for the <Inline css={{ fontWeight: "semibold" }}>View API Keys</Inline> button in the top navigation
                </Inline>
              </Box>
            </Box>
          </Box>
        </Box>
  
        {/* Support Section */}
        <Box css={{ marginTop: "xlarge", marginBottom: "large" }}>
          <Divider />
          
          <Box css={{ marginTop: "large", marginBottom: "medium", stack: "x", gap: "small", alignY: "center" }}>
            <Icon name="info" size="small" />
            <Inline css={{ font: "heading" }}>Need Help?</Inline>
          </Box>
          
          <Box css={{ marginBottom: "medium" }}>
            <Inline css={{ font: 'body', color: 'primary' }}>
              Our support team is here to help you get the most out of the Stripe App.
            </Inline>
          </Box>
  
          <Box css={{ gap: "small", stack: 'y' }}>
            <Button 
              type="primary" 
              href="https://docs.stripe.com/use-stripe-apps/commercetools-connect/install-and-configure" 
              target="_blank"
            >
              <Box css={{ stack: "x", gap: "small", alignY: "center" }}>
                <Icon name="guide" />
                Documentation
              </Box>
            </Button>
            
            <Button 
              type="secondary" 
              href="https://support.stripe.com/contact/email?topic=third_party_integrations" 
              target="_blank"
            >
              <Box css={{ stack: "x", gap: "small", alignY: "center" }}>
                <Icon name="support" />
                Contact Support
              </Box>
            </Button>
            
            <Button 
              type="secondary" 
              href="https://marketplace.commercetools.com/" 
              target="_blank"
            >
              <Box css={{ stack: "x", gap: "small", alignY: "center" }}>
                <Icon name="platform" />
                Commercetools Marketplace
              </Box>
            </Button>
          </Box>
        </Box>
      </SettingsView>
    );
  };
  
  export default AppSettings;