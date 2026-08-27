<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 3v6m0 0 3-3m-3 3L9 6m3 15v-6m0 0 3 3m-3-3-3 3m-5-6h1m4 0h1m4 0h1m4 0h1\"/>";
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
