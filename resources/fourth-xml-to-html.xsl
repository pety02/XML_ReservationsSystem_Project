<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/transactions/transaction">
        <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; }
                    .detail { margin-bottom: 1rem; }
                    .label { font-weight: bold; }
                </style>
            </head>
            <body>
                <h1>Transaction Summary</h1>
                <div class="detail">
                    <span class="text-warning">Transaction ID:</span> <xsl:value-of select="@id"/>
                </div>
                <div class="detail">
                    <span class="text-warning">Paying Tool:</span> <xsl:value-of select="@payingTool"/>
                </div>

                <div class="detail">
                    <h2>Room:</h2>
                    <span class="text-warning">Floor No:</span> <xsl:value-of select="reservation/room/floorNo"/><br/>
                    <span class="text-warning">Room No:</span> <xsl:value-of select="reservation/room/roomNo"/><br/>
                    <span class="text-warning">Price:</span> <xsl:value-of select="reservation/room/price"/> (<xsl:value-of select="reservation/room/price/@currency"/>)
                </div>

                <div class="detail">
                    <h2>Guests:</h2>
                    <xsl:for-each select="reservation/guests/guest">
                        <span><xsl:value-of select="concat(@name, ' ', @family)"/></span><br/>
                    </xsl:for-each>
                </div>

                <div class="detail">
                    <h2>Payment:</h2>
                    <span class="text-warning">IBAN:</span> <xsl:value-of select="card/iban"/><br/>
                    <span class="text-warning">Balance:</span> <xsl:value-of select="card/balance"/> (<xsl:value-of select="card/@currency"/>)
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:transform>