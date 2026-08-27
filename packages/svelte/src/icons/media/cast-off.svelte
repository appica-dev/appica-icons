<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 19h.01M7 19a4 4 0 0 0-4-4m8 4a8 8 0 0 0-8-8m12 8h3q.447 0 .875-.13m2-2a3 3 0 0 0 .128-.868v-8a3 3 0 0 0-3-3h-9m-3.865.136a3 3 0 0 0-1.935 1.864M3 3l18 18\"/>";
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
