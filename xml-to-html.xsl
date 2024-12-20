<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" indent="yes"/>

    <!-- Main Template -->
    <xsl:template match="/transactions/transaction">
        <html>
            <head>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
            </head>
            <body>
                <h1>Reservation Details:</h1>
                <span><strong>Transaction ID:</strong> <xsl:value-of select="/transactions/transaction/@id"/></span><br/>
                <span><strong>Paying Tool:</strong> <xsl:value-of select="/transactions/transaction/@payingTool"/></span>
                <xsl:apply-templates select="reservation/room"/>
                <xsl:apply-templates select="reservation/guests"/>
                <xsl:apply-templates select="card"/>
            </body>
        </html>
    </xsl:template>

    <!-- Room Details -->
    <xsl:template match="reservation/room">
        <h3><strong>Room Details:</strong></h3>
        <table class="table">
            <tr>
                <th>Floor No:</th>
                <td><xsl:value-of select="floorNo"/></td>
            </tr>
            <tr>
                <th>Room No:</th>
                <td><xsl:value-of select="roomNo"/></td>
            </tr>
            <tr>
                <th>Max Capacity:</th>
                <td><xsl:value-of select="maxCapacity"/></td>
            </tr>
            <tr>
                <th>Has Personal Bath:</th>
                <td><xsl:value-of select="hasPersonalBath"/></td>
            </tr>
            <tr>
                <th>Is Available:</th>
                <td><xsl:value-of select="isAvailable"/></td>
            </tr>
            <tr>
                <th>Price:</th>
                <td>
                    <xsl:value-of select="price"/>
                    (<xsl:value-of select="price/@currency"/>)
                </td>
            </tr>
        </table>
        <hr style="border: 1px solid gray;"/>

        <!-- Hotel Details -->
        <div style="display: inline-block;">
            <h3><strong>Hotel:</strong></h3>
            <p>
                <strong>Name:</strong> <xsl:value-of select="hotel/name"/><br/>
                <strong>Address:</strong> <xsl:value-of select="hotel/address/@country"/>,
                <xsl:value-of select="hotel/address/@town"/>,
                <xsl:value-of select="hotel/address/@location"/>
            </p>
        </div>

        <!-- Amenities Details -->
        <div style="display: inline-block; margin-left: 5rem;">
            <h3><strong>Amenities:</strong></h3>
            <xsl:for-each select="amenities/amenity">
                <span><xsl:value-of select="."/></span><br/>
            </xsl:for-each>
        </div>
    </xsl:template>

    <!-- Guests -->
    <xsl:template match="reservation/guests">
        <div style="display: inline-block; margin-left: 5rem;">
            <h3><strong>Guests:</strong></h3>
            <xsl:for-each select="guest">
                <span><xsl:value-of select="@name"/> <xsl:value-of select="@family"/></span><br/>
            </xsl:for-each>
        </div>
    </xsl:template>

    <!-- Card Details -->
    <xsl:template match="card">
        <div style="display: inline-block; margin-left: 5rem;">
            <h3><strong>Paying Details:</strong></h3>
            <p>
                <strong>IBAN:</strong> <xsl:value-of select="iban"/><br/>
                <strong>Balance:</strong> <xsl:value-of select="balance"/>
                (<xsl:value-of select="@currency"/>)
            </p>
        </div>
    </xsl:template>
</xsl:transform>