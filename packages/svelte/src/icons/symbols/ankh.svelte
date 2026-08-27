<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 13h12m-6 8v-8m0 0-.422-.211A6.47 6.47 0 0 1 8 7a4 4 0 0 1 8 0 6.47 6.47 0 0 1-3.578 5.789z\"/>";
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
