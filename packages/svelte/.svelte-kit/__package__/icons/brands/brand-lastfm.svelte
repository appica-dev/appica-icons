<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M19.986 8c-.83-1-1.387-1-1.999-1-.611 0-1.998.271-1.998 2s1.383 2.233 2.998 3c1.614.767 2.123 1.812 1.998 3s-1 2-2.998 2-2.997-1-3.497-2-1.583-4.78-2.495-6a4.996 4.996 0 0 0-7.716-.338 5.002 5.002 0 0 0 3.992 8.33A5 5 0 0 0 10.996 16\"/>";
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
