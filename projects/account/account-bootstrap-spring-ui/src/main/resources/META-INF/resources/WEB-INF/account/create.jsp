<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Create Account</title>

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
	<spring:url value="/accounts/create" var="createAccount"/>
	<form:form method="post" modelAttribute="account" 
		action="${createAccount}">
		<form:input path="username" type="text" />
		<form:input path="password" type="password" />
		<button type="submit">Create</button>
	</form:form>
</body>
</html>