package com.zaerald.server.subscription;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SubscriptionService {

    @Value("${STRIPE_API_KEY}")
    private String stripeApiKey;

    @Value("${STRIPE_PRODUCT_PRICE_ID}")
    private String stripeProductPriceId;

    @Value("${client.base-url}")
    private String clientBaseUrl;

    public Subscription createSubscriptionSession() {
        Stripe.apiKey = stripeApiKey;

        List<Object> lineItems = new ArrayList<>();
        Map<String, Object> lineItem1 = new HashMap<>();
        lineItem1.put("price", stripeProductPriceId);
        lineItem1.put("quantity", 1);
        lineItems.add(lineItem1);
        Map<String, Object> params = new HashMap<>();
        params.put(
                "success_url",
                clientBaseUrl + "/member"
        );
        params.put("line_items", lineItems);
        params.put("mode", "subscription");

        try {
            Session session = Session.create(params);

            return Subscription.builder()
                    .id(session.getId())
                    .paymentStatus(session.getPaymentStatus())
                    .url(session.getUrl())
                    .build();
        } catch (StripeException e) {
            throw new SubscriptionSessionCreationException();
        }
    }
}
