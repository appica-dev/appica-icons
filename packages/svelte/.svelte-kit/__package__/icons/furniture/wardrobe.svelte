<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 20.1H9.5c-2.828 0-4.243 0-5.121-.835S3.5 17.087 3.5 14.4V8.7c0-2.687 0-4.031.879-4.865S6.672 3 9.5 3H12m0 17.1V3m0 17.1h2.5c2.828 0 4.243 0 5.121-.835s.879-2.178.879-4.865V8.7c0-2.687 0-4.03-.879-4.865S17.328 3 14.5 3H12M6.333 20.1V22m11.333-1.9V22m-8.5-11.4v.95m5.667-.95v.95\"/>";
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
