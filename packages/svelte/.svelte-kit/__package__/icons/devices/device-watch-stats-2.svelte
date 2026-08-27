<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3M9 6h6M9 6V3h6v3m0 0a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3m0 0H9m6 0v3H9v-3m3-8a2 2 0 1 0 2 2\"/>";
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
