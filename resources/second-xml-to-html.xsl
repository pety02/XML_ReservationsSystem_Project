<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/transactions/transaction">
        <html>
            <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
            </head>
            <body>
                <h1>Transaction Overview</h1>
                <ul>
                    <li><strong>Transaction ID:</strong> <xsl:value-of select="@id"/></li>
                    <li><strong>Paying Tool:</strong> <xsl:value-of select="@payingTool"/></li>
                </ul>

                <h2>Room Details</h2>
                <ul>
                    <li><strong>Floor No:</strong> <xsl:value-of select="reservation/room/floorNo"/></li>
                    <li><strong>Room No:</strong> <xsl:value-of select="reservation/room/roomNo"/></li>
                    <li><strong>Price:</strong> <xsl:value-of select="reservation/room/price"/> (<xsl:value-of select="reservation/room/price/@currency"/>)</li>
                </ul>

                <h2>Guests</h2>
                <ul>
                    <xsl:for-each select="reservation/guests/guest">
                        <li><xsl:value-of select="concat(@name, ' ', @family)"/></li>
                    </xsl:for-each>
                </ul>

                <h2>Payment Details</h2>
                <ul>
                    <li><strong>IBAN:</strong> <xsl:value-of select="card/iban"/></li>
                    <li><strong>Balance:</strong> <xsl:value-of select="card/balance"/> (<xsl:value-of select="card/@currency"/>)</li>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:transform>