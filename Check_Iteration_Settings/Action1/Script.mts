num1 = CInt(DataTable("Number1", dtGlobalSheet))
num2 = CInt(DataTable("Number2", dtGlobalSheet))
expected_total = DataTable("Expected_Total", dtGlobalSheet)
actual_total = num1 + num2

If CInt(expected_total) = CInt(actual_total) Then
	Reporter.ReportEvent micPass,"Validation Passed","Validation Passed"
Else
	Reporter.ReportEvent micFail,"Validation Failed","Validation Failed"	
End If
