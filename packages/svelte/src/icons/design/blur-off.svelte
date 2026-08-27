<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 3v5m0 4v8M5.641 5.631A9 9 0 0 0 18.36 18.369m1.68-2.318A9 9 0 0 0 7.966 3.953M16 12h5m-8-3h7m-8-3h6m-6 12h6m-6-3h3m4 0h1M3 3l18 18\"/>";
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
