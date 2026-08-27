<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M21 6v12h-.89c-3.34 0-6.047-2.686-6.047-6s2.707-6 6.046-6zM3.063 6v12h.891C7.294 18 10 15.314 10 12S7.293 6 3.954 6z\"/>";
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
