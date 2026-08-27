<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20.136 11.136 12 3l-9 9h2v7a2 2 0 0 0 2 2h7m-5 0v-6a2 2 0 0 1 2-2h2c.467 0 .896.16 1.236.428M19 22v.01M19 19a2 2 0 1 0-.377-3.961 1.98 1.98 0 0 0-1.123.662\"/>";
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
