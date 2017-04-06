<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
	
	<spring:url value="/resources/bootstrap/4.0.0-alpha/css/bootstrap.css" var="bootstrapCss" />
	<spring:url value="/resources/bootstrap/4.0.0-alpha/css/bootstrap-theme.css" var="bootstrapThemeCss" />
	<spring:url value="/resources/jquery/2.1.4/jquery.min.js" var="jqueryJs" />
	<spring:url value="/resources/bootstrap/4.0.0-alpha/js/bootstrap.min.js" var="bootstrapJs" />
	
  <link rel="stylesheet" type="text/css" href="${bootstrapCss}">
  <link rel="stylesheet" type="text/css" href="${bootstrapThemeCss}">
  <script src="${jqueryJs}"></script> 
  <script src="${bootstrapJs}"></script> 
</head>
<body>
	Log In
</body>
</html>