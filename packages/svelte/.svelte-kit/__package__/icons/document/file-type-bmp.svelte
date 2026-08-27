<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14 3v4a1 1 0 0 0 1 1h4m-5-5H7a2 2 0 0 0-2 2v7m9-9 5 5m0 0v4m-1 6h1.5a1.5 1.5 0 1 0 0-3H18v6M5.5 18a1.5 1.5 0 1 1 0 3H4v-6h1.5a1.5 1.5 0 1 1 0 3m0 0H4m6 3v-6l2.5 3 2.5-3v6\"/>";
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
