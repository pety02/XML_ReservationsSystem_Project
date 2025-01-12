<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/transactions/transaction">
        <html>
            <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
            </head>
            <body>
                <h1>Reservation Information</h1>
                <table class="table table-bordered">
                    <tr>
                        <th>Transaction ID</th>
                        <td><xsl:value-of select="@id"/></td>
                    </tr>
                    <tr>
                        <th>Paying Tool</th>
                        <td><xsl:value-of select="@payingTool"/></td>
                    </tr>
                </table>

                <h2>Room Information</h2>
                <table class="table table-striped">
                    <tr><th>Floor No</th><td><xsl:value-of select="reservation/room/floorNo"/></td></tr>
                    <tr><th>Room No</th><td><xsl:value-of select="reservation/room/roomNo"/></td></tr>
                    <tr><th>Price</th><td><xsl:value-of select="reservation/room/price"/>
                        (<xsl:value-of select="reservation/room/price/@currency"/>)</td></tr>
                </table>

                <h2>Guest Information</h2>
                <table class="table table-hover">
                    <xsl:for-each select="reservation/guests/guest">
                        <tr>
                            <th>Guest</th>
                            <td><xsl:value-of select="concat(@name, ' ', @family)"/></td>
                        </tr>
                    </xsl:for-each>
                </table>

                <h2>Payment Information</h2>
                <table class="table table-condensed">
                    <tr>
                        <th>IBAN</th>
                        <td><xsl:value-of select="card/iban"/></td>
                    </tr>
                    <tr>
                        <th>Balance</th>
                        <td><xsl:value-of select="card/balance"/> (<xsl:value-of select="card/@currency"/>)</td>
                    </tr>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:transform>