<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3.45 4.4v15.2c0 .896 0 1.343.278 1.622s.726.278 1.622.278h4.75M3.45 4.4H8.2c.608-1.114 2.08-1.9 3.8-1.9s3.192.786 3.8 1.9h4.75m-17.1 0H2.5m18.05 0v15.2c0 .896 0 1.343-.278 1.622s-.726.278-1.622.278H13.9m6.65-17.1h.95m-7.6 17.1v-3.8a1.9 1.9 0 1 0-3.8 0v3.8m3.8 0h-3.8m.475-13.3v1.425m0 0v1.425m0-1.425h2.85m0-1.425v1.425m0 0v1.425M6.3 8.2h.95M6.3 12h.95m-.95 3.8h.95m9.5-7.6h.95m-.95 3.8h.95m-.95 3.8h.95\"/>";
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
