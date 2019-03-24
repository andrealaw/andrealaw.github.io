package reporting;
import domain.Employee;

public class EmployeeReportFormatter extends ReportFormatter {
	
	public EmployeeReportFormatter(Employee employee, FormatType formatType) {
		super(employee, formatType);
	}

	public void getFormattedEmployee() {
		System.out.println(getFormattedValue());
	}
	
}
