<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m7 16 3-3m0 0 3 3m-3-3c-.423-1.83-1.372-3.02-2.5-3-.789 0-1.5.672-1.5 1.5S7.211 13 8 13h4c.789 0 2-.672 2-1.5s-.711-1.5-1.5-1.5c-1.128-.02-2.077 1.17-2.5 3M3 8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z\"/>";
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
