<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6.045 9.777a6 6 0 1 0 5.95.023m.002 10.396a6 6 0 1 0-2.948-5.97m8.9-4.441Q18 9.399 18 9a6 6 0 1 0-3.055 5.23\"/>";
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
