<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 13v4m8-12v.5a2 2 0 0 0 2 2 2 2 0 0 1 2 2v.5M3 3l18 18m-4-8h3a1 1 0 0 1 1 1v2c0 .28-.115.533-.3.714M17 17H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h9\"/>";
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
