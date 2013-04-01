package com.blogspot.javapeanuts.spikes;

import static org.junit.Assert.*;

import java.text.MessageFormat;

import org.junit.Test;

public class MessageFormatTest {
	@Test
	public void providingPositionalParameters() throws Exception {
		String result = MessageFormat.format("From {0} to {1}", "XX", "yy");
		assertEquals("From XX to yy", result);
	}
}
