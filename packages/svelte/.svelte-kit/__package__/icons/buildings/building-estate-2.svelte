<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3.5 16c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2-1.5.895-1.5 2 .672 2 1.5 2zm0 0v6M16 22v-9c0-1.886 0-2.828-.586-3.414S13.886 9 12 9s-2.828 0-3.414.586S8 11.114 8 13v9m8 0H8m8 0h6M8 22H2m19 0V7.485c0-1.098 0-1.646-.316-2.109s-.897-.768-2.059-1.376l-1.479-.775c-1.825-.956-2.738-1.434-3.442-1.137S13 3.245 13 4.967V9m8-1h-2m2 3h-2m2 3h-2m-7.5-1h1m-1 3h1\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
