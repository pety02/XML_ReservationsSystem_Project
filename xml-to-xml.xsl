<?xml version="1.0" encoding="UTF-8" ?>

<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="xml" encoding="UTF-8" indent="yes"/>

    <!-- First XSLT Transformation Template: from XML to other XML format -->
    <xsl:template match="/">
        <transactions>
            <xsl:for-each select="transactions/transaction">
                <transaction>
                    <transactionId><xsl:value-of select="@id" /></transactionId>
                    <roomNumber><xsl:value-of select="reservation/room/roomNo" /></roomNumber>
                    <guests>
                        <xsl:for-each select="reservation/guests/guest">
                            <guest>
                                <name><xsl:value-of select="@name" /></name>
                                <family><xsl:value-of select="@family" /></family>
                            </guest>
                        </xsl:for-each>
                    </guests>
                    <cardBalance><xsl:value-of select="card/balance" /></cardBalance>
                </transaction>
            </xsl:for-each>
        </transactions>
    </xsl:template>

    <!-- Second XSLT Transformation Template: from XML to other XML format -->
    <xsl:template match="/">
        <rooms>
            <xsl:for-each select="transactions/transaction/reservation/room">
                <room>
                    <roomNumber><xsl:value-of select="roomNo" /></roomNumber>
                    <floorNumber><xsl:value-of select="floorNo" /></floorNumber>
                    <maxCapacity><xsl:value-of select="maxCapacity" /></maxCapacity>
                    <hasPersonalBath><xsl:value-of select="hasPersonalBath" /></hasPersonalBath>
                    <amenities>
                        <xsl:for-each select="../amenities/amenity">
                            <amenity><xsl:value-of select="." /></amenity>
                        </xsl:for-each>
                    </amenities>
                </room>
            </xsl:for-each>
        </rooms>
    </xsl:template>
</xsl:transform>