<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14 3v4a1 1 0 0 0 1 1h4m-5-5H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8m-5-5 5 5m-9.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0 0a2.5 2.5 0 0 1 2.5-2.5h1m0 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0\"/>";
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
