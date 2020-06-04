<?php

namespace App\Http\Controllers;
use App\Contact;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index(){
    	$contact=Contact::all();
    	return view('main.contact.contact',['contact'=>$contact]);
    }

    public function add(Request $request){

    	$contact= new Contact;
    	$contact->name=$request->name;
    	$contact->save();
    	return 'done';
    }
}
