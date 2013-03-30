package com.blogspot.javapeanuts.tddninja;

import static org.junit.Assert.*;

import org.junit.Test;

public class ApplicationDescriptorTest {
	private static final String APP_NAME = "tdd-ninja";

	@Test
	public void testApplicationName() throws Exception {
		assertEquals(APP_NAME, new ApplicationDescriptor(APP_NAME).getApplicationName());
	}
}
