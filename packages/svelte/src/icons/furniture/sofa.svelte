<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 11a2 2 0 0 1 2 2v1h12v-1a2 2 0 0 1 2-2M4 11a2 2 0 0 0-2 2v5a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-5a2 2 0 0 0-2-2M4 11V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3m-8-6v9\"/>";
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
