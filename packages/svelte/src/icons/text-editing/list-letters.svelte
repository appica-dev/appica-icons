<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11 6h9m-9 6h9m-9 6h9M4 10V5.5a1.5 1.5 0 0 1 3 0V10M4 8h3m-1.5 9a1.5 1.5 0 1 1 0 3H4v-6h1.5a1.5 1.5 0 1 1 0 3m0 0H4\"/>";
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
