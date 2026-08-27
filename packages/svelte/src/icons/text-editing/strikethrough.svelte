<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 12h14m-3-5.5c-.227-.44-.746-.828-1.473-1.101S12.908 4.986 12 5h-1a3.5 3.5 0 1 0 0 7h2a3.5 3.5 0 0 1 0 7h-1.5c-.908.014-1.8-.126-2.527-.399S7.727 17.941 7.5 17.5\"/>";
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
