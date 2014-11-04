window.onload = function(){

	var paper = Raphael("canvas", 640, 710);
	
	//variables femme
	var circleF = {};
	var altCircleF = {}; // variable à utiliser pour les cercles qui se chevauchent

	//variables homme
	var circleH = {};
	var altCircleH = {}; // variable à utiliser pour les cercles qui se chevauchent


	circleF.lille = paper.circle(372, 101, 3).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleF.lille.node).qtip({content:
			{text:"<b>21 588</b> femmes ne vivent pas <br>en couple soit<br><b>365</b> de plus que d'hommes", title: '<b>Lille</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'top middle',
	        		at: 'bottom middle',
	    			}
	        });

	circleF.paris = paper.circle(348, 224, 115).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleF.paris.node).qtip({content:
			{text:"<b>152 062</b> femmes ne vivent pas <br>en couple soit<br><b>13 798</b> de plus que d'hommes", title: '<b>Paris</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'top middle',
	        		at: 'bottom middle',
	    			}
	        });


	circleF.stras = paper.circle(577, 229, 12).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleF.stras.node).qtip({content:
			{text:"<b>19 990</b> femmes ne vivent pas <br>en couple soit<br><b>1 209</b> de plus que d'hommes", title: '<b>Strasbourg</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom right',
	        		at: 'top middle',
	    			}
	        });

	circleF.tours = paper.circle(264, 315, 4).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleF.tours.node).qtip({content:
			{text:"<b>9 882</b> femmes ne vivent pas <br>en couple soit<br><b>475</b> de plus que d'hommes", title: '<b>Tours</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	circleF.poitiers = paper.circle(243, 371, 10).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleF.poitiers.node).qtip({content:
			{text:"<b>8 490</b> femmes ne vivent pas <br>en couple soit<br><b>991</b> de plus que d'hommes", title: '<b>Poitiers</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	circleF.lyon = paper.circle(440, 427, 38).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleF.lyon.node).qtip({content:
			{text:"<b>37 127</b> femmes ne vivent pas <br>en couple soit<br><b>3 973</b> de plus que d'hommes", title: '<b>Lyon</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	circleF.bordeaux = paper.circle(199, 457, 22.5).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleF.bordeaux.node).qtip({content:
			{text:"<b>20 133</b> femmes ne vivent pas <br>en couple soit<br><b>1 770</b> de plus que d'hommes", title: '<b>Bordeaux</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	circleF.montp = paper.circle(408, 568, 7.5).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleF.montp.node).qtip({content:
			{text:"<b>21 798</b> femmes ne vivent pas <br>en couple soit<br><b>746</b> de plus que d'hommes", title: '<b>Montpellier</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	circleH.mars = paper.circle(486, 586, 42).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleH.mars.node).qtip({content:
			{text:"<b>40 922</b> hommes ne vivent pas <br>en couple soit<br><b>4 164</b> de plus que de femmes", title: '<b>Marseille</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	altCircleF.aix = paper.circle(481, 556, 3).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(altCircleF.aix.node).qtip({content:
			{text:"<b>9 915</b> femmes ne vivent pas <br>en couple soit<br><b>392</b> de plus que d'hommes", title: '<b>Aix-en-Provence</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	circleH.toulouse = paper.circle(284, 556, 38).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleH.toulouse.node).qtip({content:
			{text:"<b>37 841</b> hommes ne vivent pas <br>en couple soit<br><b>3 811</b> de plus que de femmes", title: '<b>Toulouse</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	circleH.brest = paper.circle(41, 232, 25).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleH.brest.node).qtip({content:
			{text:"<b>10 218</b> hommes ne vivent pas <br>en couple soit<br><b>2 586</b> de plus que de femmes", title: '<b>Brest</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom left',
	        		at: 'top middle',
	    			}
	        });

	circleH.grenoble = paper.circle(503, 457, 22.5).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleH.grenoble.node).qtip({content:
			{text:"<b>13 840</b> hommes ne vivent pas <br>en couple soit<br><b>2 291</b> de plus que de femmes", title: '<b>Grenoble</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	circleH.nantes = paper.circle(170, 319, 21).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleH.nantes.node).qtip({content:
			{text:"<b>21 318</b> hommes ne vivent pas <br>en couple soit<br><b>2 112</b> de plus que de femmes", title: '<b>Nantes</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	circleH.metz = paper.circle(505, 205, 20).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleH.metz.node).qtip({content:
			{text:"<b>8 543</b> hommes ne vivent pas <br>en couple soit<br><b>1 956</b> de plus que de femmes", title: '<b>Metz</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	altCircleH.villeur = paper.circle(456, 424, 20).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(altCircleH.villeur.node).qtip({content:
			{text:"<b>10 863</b> hommes ne vivent pas <br>en couple soit<br><b>1 917</b> de plus que de femmes", title: '<b>Villeurbanne</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	altCircleH.clermont = paper.circle(375, 427, 11).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(altCircleH.clermont.node).qtip({content:
			{text:"<b>11 292</b> hommes ne vivent pas <br>en couple soit<br><b>1 149</b> de plus que de femmes", title: '<b>Clermont-Ferrand</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	circleH.belfort = paper.circle(539, 317, 15).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleH.belfort.node).qtip({content:
			{text:"<b>3 600</b> hommes ne vivent pas <br>en couple soit<br><b>1 583</b> de plus que de femmes", title: '<b>Belfort</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom right',
	        		at: 'top middle',
	    			}
	        });

	altCircleH.auber = paper.circle(355, 217, 15).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(altCircleH.auber.node).qtip({content:
			{text:"<b>4 852</b> hommes ne vivent pas <br>en couple soit<br><b>1 565</b> de plus que de femmes", title: '<b>Aubervilliers</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	altCircleF.alfort = paper.circle(358, 237, 3).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.7"});
		$(altCircleF.alfort.node).qtip({content:
			{text:"<b>2 770</b> femmes ne vivent pas <br>en couple soit<br><b>227</b> de plus que d'hommes", title: '<b>Maison-Alfort</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

// +5 hommes +5 femmes

	altCircleH.toulon = paper.circle(509, 590, 13).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(altCircleH.toulon.node).qtip({content:
			{text:"<b>6 571</b> hommes ne vivent pas <br>en couple soit<br><b>1 353</b> de plus que de femmes", title: '<b>Toulon</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	circleH.nice = paper.circle(573, 548, 12.5).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleH.nice.node).qtip({content:
			{text:"<b>15 300</b> hommes ne vivent pas <br>en couple soit<br><b>1 318</b> de plus que de femmes", title: '<b>Nice</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom right',
	        		at: 'top middle',
	    			}
	        });

	altCircleH.nanterre = paper.circle(325, 217, 11).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(altCircleH.nanterre.node).qtip({content:
			{text:"<b>5 480</b> hommes ne vivent pas <br>en couple soit<br><b>1 182</b> de plus que de femmes", title: '<b>Nanterre</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	altCircleH.stdenis = paper.circle(339, 209, 11).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(altCircleH.stdenis.node).qtip({content:
			{text:"<b>6 438</b> hommes ne vivent pas <br>en couple soit<br><b>1 170</b> de plus que de femmes", title: '<b>Saint-Denis</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	altCircleH.havre = paper.circle(246, 171, 14).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(altCircleH.havre.node).qtip({content:
			{text:"<b>8 505</b> hommes ne vivent pas <br>en couple soit<br><b>1 393</b> de plus que de femmes", title: '<b>Le Havre</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'top middle',
	        		at: 'bottom middle',
	    			}
	        });

//fonction de stroke au survol homme//

	var current = null;
	for (state in circleH) {
	circleH[state].color = "#000"; /* Couleur de la stroke au rollover */
	(function (st, state) {
	st[0].style.cursor = "pointer";
	
	st[0].onmouseover = function () {
	st.animate({stroke: st.color, "stroke-width":3, x: 50}, 100);
	paper.safari();
	};
	
	st[0].onmouseout = function () {
		st.animate({stroke: "#fff", 'stroke-width': 2}, 100);
		paper.safari();
	};

	})(circleH[state], state);
}

//survol des ronds qui en chevauchent d'autres//

	for (state in altCircleH) {
	altCircleH[state].color = "#000"; /* Couleur de la stroke au rollover */
	(function (st, state) {
	st[0].style.cursor = "pointer";
	
	st[0].onmouseover = function () {
	st.animate({stroke: st.color, "stroke-width":3, x: 50}, 100);
	paper.safari();
	st.toFront();
	};
	
	st[0].onmouseout = function () {
		st.animate({stroke: "#fff", "stroke-width":2}, 100);
		paper.safari();
	};

	})(altCircleH[state], state);
}

//fonction de stroke au survol femme//

	var current = null;
	for (state in circleF) {
	circleF[state].color = "#000"; /* Couleur de la stroke au rollover */
	(function (st, state) {
	st[0].style.cursor = "pointer";
	
	st[0].onmouseover = function () {
	st.animate({stroke: st.color, "stroke-width":3, x: 50}, 100);
	paper.safari();
	};
	
	st[0].onmouseout = function () {
		st.animate({stroke: "#fff", 'stroke-width': 2}, 100);
		paper.safari();
	};

	})(circleF[state], state);
}

//survol des ronds qui en chevauchent d'autres//

	for (state in altCircleF) {
	altCircleF[state].color = "#000"; /* Couleur de la stroke au rollover */
	(function (st, state) {
	st[0].style.cursor = "pointer";
	
	st[0].onmouseover = function () {
	st.animate({stroke: st.color, "stroke-width":3, x: 50}, 100);
	paper.safari();
	st.toFront();
	};
	
	st[0].onmouseout = function () {
		st.animate({stroke: "#fff", "stroke-width":2}, 100);
		paper.safari();
	};

	})(altCircleF[state], state);
}

}