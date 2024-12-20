<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="text" encoding="UTF-8" />

    <!-- First XSLT Transformation Template: from XML to Plain Text -->
    <xsl:template match="/">
        <xsl:for-each select="transactions/transaction">
            Transaction ID: <xsl:value-of select="@id" />
            Paying Tool: <xsl:value-of select="@payingTool" />
            Room No: <xsl:value-of select="reservation/room/roomNo" />
            Floor No: <xsl:value-of select="reservation/room/floorNo" />
            Price: <xsl:value-of select="reservation/room/price" /> <xsl:text> (</xsl:text> <xsl:value-of select="reservation/room/price/@currency"/> <xsl:text>)</xsl:text>
            Guests:
            <xsl:for-each select="reservation/guests/guest">
                <xsl:value-of select="@name" />
                <xsl:text> </xsl:text>
                <xsl:value-of select="@family" />
                <xsl:text>; </xsl:text>
            </xsl:for-each>
            <xsl:text>&#10;</xsl:text>
            Payed By: <xsl:value-of select="reservation/guests/guest[@email or @phone]/@name"/>
            <xsl:text> </xsl:text><xsl:value-of select="reservation/guests/guest[@email or @phone]/@family"/>
            Card Balance: <xsl:value-of select="card/balance" /> <xsl:text> (</xsl:text> <xsl:value-of select="card/@currency"/> <xsl:text>)</xsl:text>
            <xsl:text>&#10;</xsl:text>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>