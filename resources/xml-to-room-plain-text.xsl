<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="text" encoding="UTF-8"/>

    <!-- Second XSLT Transformation Template: from XML to Plain Text -->
    <xsl:template match="/">
        Room No:
        <xsl:value-of select="/transactions/transaction/reservation/room/roomNo"/>
        Floor No:
        <xsl:value-of select="/transactions/transaction/reservation/room/floorNo"/>
        Max Capacity:
        <xsl:value-of select="/transactions/transaction/reservation/room/maxCapacity"/>
        Has Personal Bath:
        <xsl:value-of select="/transactions/transaction/reservation/room/hasPersonalBath"/>
        Amenities:
        <xsl:for-each select="/transactions/transaction/reservation/room/amenities/amenity">
            <xsl:value-of select="."/>
            <xsl:text>; </xsl:text>
        </xsl:for-each>
        <xsl:text>&#10;</xsl:text>
    </xsl:template>
</xsl:stylesheet>