package domain.dao;
import database.DatabaseConnectionManager;
import domain.Employee;

public class EmployeeDAO {

	DatabaseConnectionManager connectionManager;
	
	public void saveEmployee(Employee employee) {
//		For demo - how a db connection works:
//		DatabaseConnectionManager connectionManager = DatabaseConnectionManager.getManagerInstance();
//		connectionManager.connect();
//		connectionManager.getConnectionObject().prepareStatement("insert into Employee");
//		connectionManager.disconnect();
		System.out.println("saved employee to the database" + employee);
		
	}
	
	public void deleteEmployee(Employee employee) {
		System.out.println("Delete employee from the database...");
	}
	
}
