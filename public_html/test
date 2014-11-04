<?xml version="1.0" encoding="ISO-8859-1"?>
<!-- Edited by XMLSpy® -->
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
  <h2>Products</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th>Name</th>
      <th>Price</th>
    </tr>
    <xsl:for-each select="products/product">
    <tr>
      <td><xsl:value-of select="name"/></td>
      <xsl:choose>
      <xsl:when test="price > 10">
         <td bgcolor="#ff00ff">
         <xsl:value-of select="Price"/>
         </td>
      </xsl:when>
      <xsl:when test="price > 9">
         <td bgcolor="#cccccc">
         <xsl:value-of select="Price"/></td>
      </xsl:when>
      <xsl:otherwise>
         <td><xsl:value-of select="Price"/></td>
      </xsl:otherwise>
      </xsl:choose>
	  </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

