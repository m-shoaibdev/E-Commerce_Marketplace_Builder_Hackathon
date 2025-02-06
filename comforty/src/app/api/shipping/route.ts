import { NextRequest, NextResponse } from "next/server";

const API_URL = "https://api.shipengine.com/v1/rates";

export async function POST(req: NextRequest) {
  try {
    const API_KEY = process.env.SHIPENGINE_API_KEY;
    if (!API_KEY) {
      throw new Error("Missing ShipEngine API Key");
    }

    const { shippingDetails, cartProducts } = await req.json();

    // Validate input
    if (!shippingDetails || !cartProducts?.length) {
      return NextResponse.json(
        { error: "Invalid shipping details or empty cart" },
        { status: 400 }
      );
    }

    // Construct the shipment request
    const shipmentRequest = {
      rate_options: {
        carrier_ids: ["se-1882479"],
        residential: true,
        service_code: "ups_ground",
        package_type: "package",
        ship_date: new Date().toISOString(),
      },
      shipment: {
        ship_from: {
          name: "Comforty",
          company_name: "Comforty",
          phone: "+1-512-555-1234",
          email: "shoaib@kodezin.com	",
          address_line1: "123 Main St",
          address_line2: "Suite 400",
          city_locality: "Austin",
          state_province: "TX",
          postal_code: "73301",
          country_code: "US",
          address_residential_indicator: "no",
        },
        ship_to: {
          name: shippingDetails.userName,
          email: shippingDetails.email,
          phone: shippingDetails.phone,
          address_line1: shippingDetails.billingAddress,
          city_locality: shippingDetails.billingCity,
          postal_code: shippingDetails.billingPostalCode,
          country_code: shippingDetails.billingCountry,
        },

        packages: cartProducts.map(
          (
            /* eslint-disable @typescript-eslint/no-explicit-any */
            item: any
          ) => ({
            weight: { value: item.weight ?? 1, unit: "pound" },
            dimensions: {
              length: 30,
              width: 20,
              height: 10,
              unit: "inch",
            },
            insured_value: { currency: "USD", amount: 50 },
          })
        ),
      },
    };

    console.info("Sending request to ShipEngine...");

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "API-Key": API_KEY,
      },
      body: JSON.stringify(shipmentRequest),
    });

    console.log(response);

    if (!response.ok) {
      const errorDetails = await response.text();
      console.error("ShipEngine API Error:", response.status, errorDetails);

      return NextResponse.json(
        { error: `Failed to fetch shipping rates: ${errorDetails}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("ShipEngine API Response:", data);

    if (!data.rates || data.rates.length === 0) {
      return NextResponse.json(
        { error: "No shipping rates available." },
        { status: 404 }
      );
    }

    return NextResponse.json({ rates: data.rates });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Error fetching shipping rates." },
      { status: 500 }
    );
  }
}
