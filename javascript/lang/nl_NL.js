if(typeof(ss) == 'undefined' || typeof(ss.i18n) == 'undefined') {
  if(typeof(console) != 'undefined') console.error('Class ss.i18n not defined');
} else {
  ss.i18n.addDictionary('nl_NL', {
		'CMSMAIN.WARNINGSAVEPAGESBEFOREADDING' : "U moet de pagina opslaan voordat u kinderen kan toevoegen",
		'CMSMAIN.CANTADDCHILDREN' : "Je kunt geen kinderen toevoegen aan de geselecteerde knoop",
		'CMSMAIN.ERRORADDINGPAGE' : 'Fout toevoegen pagina',
		'CMSMAIN.FILTEREDTREE' : 'Gefilterd om alleen aangepaste paginas te tonen',
		'CMSMAIN.ERRORFILTERPAGES' : 'Kon niet filteren om alleen paginas <br />%s te tonen.', 
		'CMSMAIN.ERRORUNFILTER' : 'Ongefilterde structuur',
		'CMSMAIN.PUBLISHINGPAGES' : 'Paginas aan het publiceren...',
		'CMSMAIN.SELECTONEPAGE' : "Selecteer minstens 1 pagina.",
		'CMSMAIN.ERRORPUBLISHING' : 'Verwijder gepubliceerde paginas',
		'CMSMAIN.REALLYDELETEPAGES' : "Wil je echt de geselecteerde %s pagina's verwijderen?",
		'CMSMAIN.DELETINGPAGES' : 'Paginas verwijderen...',
		'CMSMAIN.ERRORDELETINGPAGES': 'Fout bij verwijderen paginas',
		'CMSMAIN.PUBLISHING' : 'Publiceren...',
		'CMSMAIN.RESTORING': 'Herstellen...',
		'CMSMAIN.ERRORREVERTING': 'Error reverting to live content',
		'CMSMAIN.SAVING' : 'opslaan...',
		'CMSMAIN.SELECTMOREPAGES' : "Je hebt pagina(s) %s geselecteerd. \n\nWil je deze actie uitvoeren?",
		'CMSMAIN.ALERTCLASSNAME': 'Het paginatype wordt aangepast na opslaan van de pagina',
		'CMSMAIN.URLSEGMENTVALIDATION': 'URLs kunnen alleen bestaan uit letters, cijfers en koppeltekens.',
		'AssetAdmin.BATCHACTIONSDELETECONFIRM': "Wil je deze mappen %s verwijderen?",
		'AssetTableField.REALLYDELETE': 'Wil je de geselecteerde bestanden verwijderen??',
		'AssetTableField.MOVING': 'Verplaats %s bestand(en)',
		'CMSMAIN.AddSearchCriteria': 'Voeg criteria toe',
		'WidgetAreaEditor.TOOMANY': 'Sorry, je hebt de maximaal aantal widgets bereikt',
		'AssetAdmin.ConfirmDelete': 'Wil je deze map verwijderen en alle bestanden??',
		'Folder.Name': 'Mapnaam',
		'Tree.AddSubPage': 'Voeg nieuwe pagina toe',
		'Tree.EditPage': 'Aanpassen',
		'CMSMain.ConfirmRestoreFromLive': "Do you really want to copy the published content to the draft site?",
		'CMSMain.RollbackToVersion': "Do you really want to roll back to version #%s of this page?",
		'URLSEGMENT.Edit': 'Aanpassen',
		'URLSEGMENT.OK': 'OK',
		'URLSEGMENT.Cancel': 'Annuleren'
	});
}
